import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const договариваться: PerfectVerb = {
  name: Word('договариваться', 5),
  singular1stPerson: Word('договариваюсь', 5),
  singular2ndPerson: Word('договариваешься', 5),
  singular3rdPerson: Word('договаривается', 5),
  plural1stPerson: Word('договариваемся', 5),
  plural2ndPerson: Word('договариваетесь', 5),
  plural3rdPerson: Word('договариваются', 5),
  masculinePast: Word('договаривался', 5),
  femininePast: Word('договаривалась', 5),
  neuterPast: Word('договаривалось', 5),
  pluralPast: Word('договаривались', 5),
  imperativeInformal: Word('договаривайся', 5),
  imperativeFormal: Word('договаривайтесь', 5),
  imperfect: ['договориться'],
};

perfectVerbs.set(договариваться.name.text, договариваться);

export { договариваться };