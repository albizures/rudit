import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прицелиться: PerfectVerb = {
  name: Word('прицелиться', 4),
  singular1stPerson: Word('прицелюсь', 4),
  singular2ndPerson: Word('прицелишься', 4),
  singular3rdPerson: Word('прицелится', 4),
  plural1stPerson: Word('прицелимся', 4),
  plural2ndPerson: Word('прицелитесь', 4),
  plural3rdPerson: Word('прицелятся', 4),
  masculinePast: Word('прицелился', 4),
  femininePast: Word('прицелилась', 4),
  neuterPast: Word('прицелилось', 4),
  pluralPast: Word('прицелились', 4),
  imperativeInformal: Word('прицелься', 4),
  imperativeFormal: Word('прицельтесь', 4),
  imperfect: ['прицеливаться'],
};

perfectVerbs.set(прицелиться.name.text, прицелиться);

export { прицелиться };