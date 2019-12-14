import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укусить: PerfectVerb = {
  name: Word('укусить', 4),
  singular1stPerson: Word('укушу', 4),
  singular2ndPerson: Word('укусишь', 2),
  singular3rdPerson: Word('укусит', 2),
  plural1stPerson: Word('укусим', 2),
  plural2ndPerson: Word('укусите', 2),
  plural3rdPerson: Word('укусят', 2),
  masculinePast: Word('укусил', 4),
  femininePast: Word('укусила', 4),
  neuterPast: Word('укусило', 4),
  pluralPast: Word('укусили', 4),
  imperativeInformal: Word('укуси', 4),
  imperativeFormal: Word('укусите', 4),
  imperfect: [],
};

perfectVerbs.set(укусить.name.text, укусить);

export { укусить };