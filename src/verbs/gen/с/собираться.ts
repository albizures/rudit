import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const собираться: PerfectVerb = {
  name: Word('собираться', 5),
  singular1stPerson: Word('собираюсь', 5),
  singular2ndPerson: Word('собираешься', 5),
  singular3rdPerson: Word('собирается', 5),
  plural1stPerson: Word('собираемся', 5),
  plural2ndPerson: Word('собираетесь', 5),
  plural3rdPerson: Word('собираются', 5),
  masculinePast: Word('собирался', 5),
  femininePast: Word('собиралась', 5),
  neuterPast: Word('собиралось', 5),
  pluralPast: Word('собирались', 5),
  imperativeInformal: Word('собирайся', 5),
  imperativeFormal: Word('собирайтесь', 5),
  imperfect: ['собраться'],
};

perfectVerbs.set(собираться.name.text, собираться);

export { собираться };