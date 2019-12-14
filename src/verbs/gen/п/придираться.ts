import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const придираться: PerfectVerb = {
  name: Word('придираться', 6),
  singular1stPerson: Word('придираюсь', 6),
  singular2ndPerson: Word('придираешься', 6),
  singular3rdPerson: Word('придирается', 6),
  plural1stPerson: Word('придираемся', 6),
  plural2ndPerson: Word('придираетесь', 6),
  plural3rdPerson: Word('придираются', 6),
  masculinePast: Word('придирался', 6),
  femininePast: Word('придиралась', 6),
  neuterPast: Word('придиралось', 6),
  pluralPast: Word('придирались', 6),
  imperativeInformal: Word('придирайся', 6),
  imperativeFormal: Word('придирайтесь', 6),
  imperfect: ['придраться'],
};

perfectVerbs.set(придираться.name.text, придираться);

export { придираться };