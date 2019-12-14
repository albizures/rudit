import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пустозвонить: PerfectVerb = {
  name: Word('пустозвонить', 7),
  singular1stPerson: Word('пустозвоню', 7),
  singular2ndPerson: Word('пустозвонишь', 7),
  singular3rdPerson: Word('пустозвонит', 7),
  plural1stPerson: Word('пустозвоним', 7),
  plural2ndPerson: Word('пустозвоните', 7),
  plural3rdPerson: Word('пустозвонят', 7),
  masculinePast: Word('пустозвонил', 7),
  femininePast: Word('пустозвонила', 7),
  neuterPast: Word('пустозвонило', 7),
  pluralPast: Word('пустозвонили', 7),
  imperativeInformal: Word('пустозвонь', 7),
  imperativeFormal: Word('пустозвоньте', 7),
  imperfect: [],
};

perfectVerbs.set(пустозвонить.name.text, пустозвонить);

export { пустозвонить };