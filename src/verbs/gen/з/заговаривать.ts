import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заговаривать: PerfectVerb = {
  name: Word('заговаривать', 5),
  singular1stPerson: Word('заговариваю', 5),
  singular2ndPerson: Word('заговариваешь', 5),
  singular3rdPerson: Word('заговаривает', 5),
  plural1stPerson: Word('заговариваем', 5),
  plural2ndPerson: Word('заговариваете', 5),
  plural3rdPerson: Word('заговаривают', 5),
  masculinePast: Word('заговаривал', 5),
  femininePast: Word('заговаривала', 5),
  neuterPast: Word('заговаривало', 5),
  pluralPast: Word('заговаривали', 5),
  imperativeInformal: Word('заговаривай', 5),
  imperativeFormal: Word('заговаривайте', 5),
  imperfect: ['заговорить'],
};

perfectVerbs.set(заговаривать.name.text, заговаривать);

export { заговаривать };