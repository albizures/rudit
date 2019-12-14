import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заследить: PerfectVerb = {
  name: Word('заследить', 6),
  singular1stPerson: Word('заслежу', 6),
  singular2ndPerson: Word('заследишь', 6),
  singular3rdPerson: Word('заследит', 6),
  plural1stPerson: Word('заследим', 6),
  plural2ndPerson: Word('заследите', 6),
  plural3rdPerson: Word('заследят', 6),
  masculinePast: Word('заследил', 6),
  femininePast: Word('заследила', 6),
  neuterPast: Word('заследило', 6),
  pluralPast: Word('заследили', 6),
  imperativeInformal: Word('заследи', 6),
  imperativeFormal: Word('заследите', 6),
  imperfect: [],
};

perfectVerbs.set(заследить.name.text, заследить);

export { заследить };