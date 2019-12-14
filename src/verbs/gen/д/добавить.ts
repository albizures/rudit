import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добавить: PerfectVerb = {
  name: Word('добавить', 3),
  singular1stPerson: Word('добавлю', 3),
  singular2ndPerson: Word('добавишь', 3),
  singular3rdPerson: Word('добавит', 3),
  plural1stPerson: Word('добавим', 3),
  plural2ndPerson: Word('добавите', 3),
  plural3rdPerson: Word('добавят', 3),
  masculinePast: Word('добавил', 3),
  femininePast: Word('добавила', 3),
  neuterPast: Word('добавило', 3),
  pluralPast: Word('добавили', 3),
  imperativeInformal: Word('добавь', 3),
  imperativeFormal: Word('добавьте', 3),
  imperfect: ['добавлять'],
};

perfectVerbs.set(добавить.name.text, добавить);

export { добавить };