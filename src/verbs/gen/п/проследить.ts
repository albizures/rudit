import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проследить: PerfectVerb = {
  name: Word('проследить', 7),
  singular1stPerson: Word('прослежу', 7),
  singular2ndPerson: Word('проследишь', 7),
  singular3rdPerson: Word('проследит', 7),
  plural1stPerson: Word('проследим', 7),
  plural2ndPerson: Word('проследите', 7),
  plural3rdPerson: Word('проследят', 7),
  masculinePast: Word('проследил', 7),
  femininePast: Word('проследила', 7),
  neuterPast: Word('проследило', 7),
  pluralPast: Word('проследили', 7),
  imperativeInformal: Word('проследи', 7),
  imperativeFormal: Word('проследите', 7),
  imperfect: [],
};

perfectVerbs.set(проследить.name.text, проследить);

export { проследить };