import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засеменить: PerfectVerb = {
  name: Word('засеменить', 7),
  singular1stPerson: Word('засеменю', 7),
  singular2ndPerson: Word('засеменишь', 7),
  singular3rdPerson: Word('засеменит', 7),
  plural1stPerson: Word('засеменим', 7),
  plural2ndPerson: Word('засемените', 7),
  plural3rdPerson: Word('засеменят', 7),
  masculinePast: Word('засеменил', 7),
  femininePast: Word('засеменила', 7),
  neuterPast: Word('засеменило', 7),
  pluralPast: Word('засеменили', 7),
  imperativeInformal: Word('засемени', 7),
  imperativeFormal: Word('засемените', 7),
  imperfect: [],
};

perfectVerbs.set(засеменить.name.text, засеменить);

export { засеменить };