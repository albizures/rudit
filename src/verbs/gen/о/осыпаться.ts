import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осыпаться: PerfectVerb = {
  name: Word('осыпаться', 4),
  singular1stPerson: Word('осыпаюсь', 4),
  singular2ndPerson: Word('осыпаешься', 4),
  singular3rdPerson: Word('осыпается', 4),
  plural1stPerson: Word('осыпаемся', 4),
  plural2ndPerson: Word('осыпаетесь', 4),
  plural3rdPerson: Word('осыпаются', 4),
  masculinePast: Word('осыпался', 4),
  femininePast: Word('осыпалась', 4),
  neuterPast: Word('осыпалось', 4),
  pluralPast: Word('осыпались', 4),
  imperativeInformal: Word('осыпайся', 4),
  imperativeFormal: Word('осыпайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(осыпаться.name.text, осыпаться);

export { осыпаться };