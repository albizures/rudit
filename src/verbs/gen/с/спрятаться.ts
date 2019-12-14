import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спрятаться: PerfectVerb = {
  name: Word('спрятаться', 3),
  singular1stPerson: Word('спрячусь', 3),
  singular2ndPerson: Word('спрячешься', 3),
  singular3rdPerson: Word('спрячется', 3),
  plural1stPerson: Word('спрячемся', 3),
  plural2ndPerson: Word('спрячетесь', 3),
  plural3rdPerson: Word('спрячутся', 3),
  masculinePast: Word('спрятался', 3),
  femininePast: Word('спряталась', 3),
  neuterPast: Word('спряталось', 3),
  pluralPast: Word('спрятались', 3),
  imperativeInformal: Word('спрячься', 3),
  imperativeFormal: Word('спрячьтесь', 3),
  imperfect: ['прятаться'],
};

perfectVerbs.set(спрятаться.name.text, спрятаться);

export { спрятаться };