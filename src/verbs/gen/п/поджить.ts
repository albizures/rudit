import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поджить: PerfectVerb = {
  name: Word('поджить', 4),
  singular1stPerson: Word('подживу', 6),
  singular2ndPerson: Word('подживёшь', 6),
  singular3rdPerson: Word('подживёт', 6),
  plural1stPerson: Word('подживём', 6),
  plural2ndPerson: Word('подживёте', 6),
  plural3rdPerson: Word('подживут', 6),
  masculinePast: Word('поджил//по'джил', 4),
  femininePast: Word('поджила', 6),
  neuterPast: Word('поджило//по'джило', 4),
  pluralPast: Word('поджили//по'джили', 4),
  imperativeInformal: Word('подживи', 6),
  imperativeFormal: Word('подживите', 6),
  imperfect: [],
};

perfectVerbs.set(поджить.name.text, поджить);

export { поджить };