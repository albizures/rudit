import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гневаться: PerfectVerb = {
  name: Word('гневаться', 2),
  singular1stPerson: Word('гневаюсь', 2),
  singular2ndPerson: Word('гневаешься', 2),
  singular3rdPerson: Word('гневается', 2),
  plural1stPerson: Word('гневаемся', 2),
  plural2ndPerson: Word('гневаетесь', 2),
  plural3rdPerson: Word('гневаются', 2),
  masculinePast: Word('гневался', 2),
  femininePast: Word('гневалась', 2),
  neuterPast: Word('гневалось', 2),
  pluralPast: Word('гневались', 2),
  imperativeInformal: Word('гневайся', 2),
  imperativeFormal: Word('гневайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(гневаться.name.text, гневаться);

export { гневаться };