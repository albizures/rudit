import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попрятаться: PerfectVerb = {
  name: Word('попрятаться', 4),
  singular1stPerson: Word('попрячусь', 4),
  singular2ndPerson: Word('попрячешься', 4),
  singular3rdPerson: Word('попрячется', 4),
  plural1stPerson: Word('попрячемся', 4),
  plural2ndPerson: Word('попрячетесь', 4),
  plural3rdPerson: Word('попрячутся', 4),
  masculinePast: Word('попрятался', 4),
  femininePast: Word('попряталась', 4),
  neuterPast: Word('попряталось', 4),
  pluralPast: Word('попрятались', 4),
  imperativeInformal: Word('попрячься', 4),
  imperativeFormal: Word('попрячьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(попрятаться.name.text, попрятаться);

export { попрятаться };