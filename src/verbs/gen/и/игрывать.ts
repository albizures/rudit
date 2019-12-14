import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const игрывать: PerfectVerb = {
  name: Word('игрывать', 0),
  singular1stPerson: Word('игрываю', 0),
  singular2ndPerson: Word('игрываешь', 0),
  singular3rdPerson: Word('игрывает', 0),
  plural1stPerson: Word('игрываем', 0),
  plural2ndPerson: Word('игрываете', 0),
  plural3rdPerson: Word('игрывают', 0),
  masculinePast: Word('игрывал', 0),
  femininePast: Word('игрывала', 0),
  neuterPast: Word('игрывало', 0),
  pluralPast: Word('игрывали', 0),
  imperativeInformal: Word('игрывай', 0),
  imperativeFormal: Word('игрывайте', 0),
  imperfect: [],
};

perfectVerbs.set(игрывать.name.text, игрывать);

export { игрывать };