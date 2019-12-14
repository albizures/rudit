import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убавить: PerfectVerb = {
  name: Word('убавить', 2),
  singular1stPerson: Word('убавлю', 2),
  singular2ndPerson: Word('убавишь', 2),
  singular3rdPerson: Word('убавит', 2),
  plural1stPerson: Word('убавим', 2),
  plural2ndPerson: Word('убавите', 2),
  plural3rdPerson: Word('убавят', 2),
  masculinePast: Word('убавил', 2),
  femininePast: Word('убавила', 2),
  neuterPast: Word('убавило', 2),
  pluralPast: Word('убавили', 2),
  imperativeInformal: Word('убавь', 2),
  imperativeFormal: Word('убавьте', 2),
  imperfect: ['убавлять'],
};

perfectVerbs.set(убавить.name.text, убавить);

export { убавить };