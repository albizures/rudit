import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const громить: PerfectVerb = {
  name: Word('громить', 4),
  singular1stPerson: Word('громлю', 5),
  singular2ndPerson: Word('громишь', 4),
  singular3rdPerson: Word('громит', 4),
  plural1stPerson: Word('громим', 4),
  plural2ndPerson: Word('громите', 4),
  plural3rdPerson: Word('громят', 4),
  masculinePast: Word('громил', 4),
  femininePast: Word('громила', 4),
  neuterPast: Word('громило', 4),
  pluralPast: Word('громили', 4),
  imperativeInformal: Word('громи', 4),
  imperativeFormal: Word('громите', 4),
  imperfect: ['погромить','разгромить'],
};

perfectVerbs.set(громить.name.text, громить);

export { громить };