import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const трусить: PerfectVerb = {
  name: Word('трусить', 4),
  singular1stPerson: Word('трушу', 4),
  singular2ndPerson: Word('трусишь', 4),
  singular3rdPerson: Word('трусит', 4),
  plural1stPerson: Word('трусим', 4),
  plural2ndPerson: Word('трусите', 4),
  plural3rdPerson: Word('трусят', 4),
  masculinePast: Word('трусил', 4),
  femininePast: Word('трусила', 4),
  neuterPast: Word('трусило', 4),
  pluralPast: Word('трусили', 4),
  imperativeInformal: Word('труси', 4),
  imperativeFormal: Word('трусите', 4),
  imperfect: [],
};

perfectVerbs.set(трусить.name.text, трусить);

export { трусить };