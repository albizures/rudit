import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взбираться: PerfectVerb = {
  name: Word('взбираться', 5),
  singular1stPerson: Word('взбираюсь', 5),
  singular2ndPerson: Word('взбираешься', 5),
  singular3rdPerson: Word('взбирается', 5),
  plural1stPerson: Word('взбираемся', 5),
  plural2ndPerson: Word('взбираетесь', 5),
  plural3rdPerson: Word('взбираются', 5),
  masculinePast: Word('взбирался', 5),
  femininePast: Word('взбиралась', 5),
  neuterPast: Word('взбиралось', 5),
  pluralPast: Word('взбирались', 5),
  imperativeInformal: Word('взбирайся', 5),
  imperativeFormal: Word('взбирайтесь', 5),
  imperfect: ['взобраться'],
};

perfectVerbs.set(взбираться.name.text, взбираться);

export { взбираться };