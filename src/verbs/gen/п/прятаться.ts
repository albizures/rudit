import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прятаться: PerfectVerb = {
  name: Word('прятаться', 2),
  singular1stPerson: Word('прячусь', 2),
  singular2ndPerson: Word('прячешься', 2),
  singular3rdPerson: Word('прячется', 2),
  plural1stPerson: Word('прячемся', 2),
  plural2ndPerson: Word('прячетесь', 2),
  plural3rdPerson: Word('прячутся', 2),
  masculinePast: Word('прятался', 2),
  femininePast: Word('пряталась', 2),
  neuterPast: Word('пряталось', 2),
  pluralPast: Word('прятались', 2),
  imperativeInformal: Word('прячься', 2),
  imperativeFormal: Word('прячьтесь', 2),
  imperfect: ['спрятаться'],
};

perfectVerbs.set(прятаться.name.text, прятаться);

export { прятаться };