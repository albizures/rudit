import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передавить: PerfectVerb = {
  name: Word('передавить', 7),
  singular1stPerson: Word('передавлю', 8),
  singular2ndPerson: Word('передавишь', 5),
  singular3rdPerson: Word('передавит', 5),
  plural1stPerson: Word('передавим', 5),
  plural2ndPerson: Word('передавите', 5),
  plural3rdPerson: Word('передавят', 5),
  masculinePast: Word('передавил', 7),
  femininePast: Word('передавила', 7),
  neuterPast: Word('передавило', 7),
  pluralPast: Word('передавили', 7),
  imperativeInformal: Word('передави', 7),
  imperativeFormal: Word('передавите', 7),
  imperfect: [],
};

perfectVerbs.set(передавить.name.text, передавить);

export { передавить };