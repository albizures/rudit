import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const датироваться: PerfectVerb = {
  name: Word('датироваться', 3),
  singular1stPerson: Word('датируюсь', 3),
  singular2ndPerson: Word('датируешься', 3),
  singular3rdPerson: Word('датируется', 3),
  plural1stPerson: Word('датируемся', 3),
  plural2ndPerson: Word('датируетесь', 3),
  plural3rdPerson: Word('датируются', 3),
  masculinePast: Word('датировался', 3),
  femininePast: Word('датировалась', 3),
  neuterPast: Word('датировалось', 3),
  pluralPast: Word('датировались', 3),
  imperativeInformal: Word('датируйся', 3),
  imperativeFormal: Word('датируйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(датироваться.name.text, датироваться);

export { датироваться };