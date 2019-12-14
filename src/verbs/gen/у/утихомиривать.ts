import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утихомиривать: PerfectVerb = {
  name: Word('утихомиривать', 6),
  singular1stPerson: Word('утихомириваю', 6),
  singular2ndPerson: Word('утихомириваешь', 6),
  singular3rdPerson: Word('утихомиривает', 6),
  plural1stPerson: Word('утихомириваем', 6),
  plural2ndPerson: Word('утихомириваете', 6),
  plural3rdPerson: Word('утихомиривают', 6),
  masculinePast: Word('утихомиривал', 6),
  femininePast: Word('утихомиривала', 6),
  neuterPast: Word('утихомиривало', 6),
  pluralPast: Word('утихомиривали', 6),
  imperativeInformal: Word('утихомиривай', 6),
  imperativeFormal: Word('утихомиривайте', 6),
  imperfect: [],
};

perfectVerbs.set(утихомиривать.name.text, утихомиривать);

export { утихомиривать };