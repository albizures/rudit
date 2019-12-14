import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присоединиться: PerfectVerb = {
  name: Word('присоединиться', 9),
  singular1stPerson: Word('присоединюсь', 9),
  singular2ndPerson: Word('присоединишься', 9),
  singular3rdPerson: Word('присоединится', 9),
  plural1stPerson: Word('присоединимся', 9),
  plural2ndPerson: Word('присоединитесь', 9),
  plural3rdPerson: Word('присоединятся', 9),
  masculinePast: Word('присоединился', 9),
  femininePast: Word('присоединилась', 9),
  neuterPast: Word('присоединилось', 9),
  pluralPast: Word('присоединились', 9),
  imperativeInformal: Word('присоединись', 9),
  imperativeFormal: Word('присоединитесь', 9),
  imperfect: ['присоединяться'],
};

perfectVerbs.set(присоединиться.name.text, присоединиться);

export { присоединиться };