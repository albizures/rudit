import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затихать: PerfectVerb = {
  name: Word('затихать', 5),
  singular1stPerson: Word('затихаю', 5),
  singular2ndPerson: Word('затихаешь', 5),
  singular3rdPerson: Word('затихает', 5),
  plural1stPerson: Word('затихаем', 5),
  plural2ndPerson: Word('затихаете', 5),
  plural3rdPerson: Word('затихают', 5),
  masculinePast: Word('затихал', 5),
  femininePast: Word('затихала', 5),
  neuterPast: Word('затихало', 5),
  pluralPast: Word('затихали', 5),
  imperativeInformal: Word('затихай', 5),
  imperativeFormal: Word('затихайте', 5),
  imperfect: ['затихнуть'],
};

perfectVerbs.set(затихать.name.text, затихать);

export { затихать };