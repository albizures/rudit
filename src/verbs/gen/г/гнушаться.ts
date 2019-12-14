import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гнушаться: PerfectVerb = {
  name: Word('гнушаться', 4),
  singular1stPerson: Word('гнушаюсь', 4),
  singular2ndPerson: Word('гнушаешься', 4),
  singular3rdPerson: Word('гнушается', 4),
  plural1stPerson: Word('гнушаемся', 4),
  plural2ndPerson: Word('гнушаетесь', 4),
  plural3rdPerson: Word('гнушаются', 4),
  masculinePast: Word('гнушался', 4),
  femininePast: Word('гнушалась', 4),
  neuterPast: Word('гнушалось', 4),
  pluralPast: Word('гнушались', 4),
  imperativeInformal: Word('гнушайся', 4),
  imperativeFormal: Word('гнушайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(гнушаться.name.text, гнушаться);

export { гнушаться };