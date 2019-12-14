import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застопориваться: PerfectVerb = {
  name: Word('застопориваться', 4),
  singular1stPerson: Word('застопориваюсь', 4),
  singular2ndPerson: Word('застопориваешься', 4),
  singular3rdPerson: Word('застопоривается', 4),
  plural1stPerson: Word('застопориваемся', 4),
  plural2ndPerson: Word('застопориваетесь', 4),
  plural3rdPerson: Word('застопориваются', 4),
  masculinePast: Word('застопоривался', 4),
  femininePast: Word('застопоривалась', 4),
  neuterPast: Word('застопоривалось', 4),
  pluralPast: Word('застопоривались', 4),
  imperativeInformal: Word('застопоривайся', 4),
  imperativeFormal: Word('застопоривайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(застопориваться.name.text, застопориваться);

export { застопориваться };