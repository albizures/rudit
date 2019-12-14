import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прибить: PerfectVerb = {
  name: Word('прибить', 4),
  singular1stPerson: Word('прибью', 5),
  singular2ndPerson: Word('прибьёшь', 2),
  singular3rdPerson: Word('прибьёт', 2),
  plural1stPerson: Word('прибьём', 2),
  plural2ndPerson: Word('прибьёте', 7),
  plural3rdPerson: Word('прибьют', 5),
  masculinePast: Word('прибил', 4),
  femininePast: Word('прибила', 4),
  neuterPast: Word('прибило', 4),
  pluralPast: Word('прибили', 4),
  imperativeInformal: Word('прибей', 4),
  imperativeFormal: Word('прибейте', 4),
  imperfect: [],
};

perfectVerbs.set(прибить.name.text, прибить);

export { прибить };