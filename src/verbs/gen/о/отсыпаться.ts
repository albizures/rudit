import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсыпаться: PerfectVerb = {
  name: Word('отсыпаться', 5),
  singular1stPerson: Word('отсыпаюсь', 5),
  singular2ndPerson: Word('отсыпаешься', 5),
  singular3rdPerson: Word('отсыпается', 5),
  plural1stPerson: Word('отсыпаемся', 5),
  plural2ndPerson: Word('отсыпаетесь', 5),
  plural3rdPerson: Word('отсыпаются', 5),
  masculinePast: Word('отсыпался', 5),
  femininePast: Word('отсыпалась', 5),
  neuterPast: Word('отсыпалось', 5),
  pluralPast: Word('отсыпались', 5),
  imperativeInformal: Word('отсыпайся', 5),
  imperativeFormal: Word('отсыпайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отсыпаться.name.text, отсыпаться);

export { отсыпаться };