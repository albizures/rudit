import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затаить: PerfectVerb = {
  name: Word('затаить', 4),
  singular1stPerson: Word('затаю', 4),
  singular2ndPerson: Word('затаишь', 4),
  singular3rdPerson: Word('затаит', 4),
  plural1stPerson: Word('затаим', 4),
  plural2ndPerson: Word('затаите', 4),
  plural3rdPerson: Word('затаят', 4),
  masculinePast: Word('затаил', 4),
  femininePast: Word('затаила', 4),
  neuterPast: Word('затаило', 4),
  pluralPast: Word('затаили', 4),
  imperativeInformal: Word('затаи', 4),
  imperativeFormal: Word('затаите', 4),
  imperfect: [],
};

perfectVerbs.set(затаить.name.text, затаить);

export { затаить };