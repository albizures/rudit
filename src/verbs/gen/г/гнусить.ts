import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гнусить: PerfectVerb = {
  name: Word('гнусить', 4),
  singular1stPerson: Word('гнушу', 4),
  singular2ndPerson: Word('гнусишь', 4),
  singular3rdPerson: Word('гнусит', 4),
  plural1stPerson: Word('гнусим', 4),
  plural2ndPerson: Word('гнусите', 4),
  plural3rdPerson: Word('гнусят', 4),
  masculinePast: Word('гнусил', 4),
  femininePast: Word('гнусила', 4),
  neuterPast: Word('гнусило', 4),
  pluralPast: Word('гнусили', 4),
  imperativeInformal: Word('гнуси', 4),
  imperativeFormal: Word('гнусите', 4),
  imperfect: [],
};

perfectVerbs.set(гнусить.name.text, гнусить);

export { гнусить };