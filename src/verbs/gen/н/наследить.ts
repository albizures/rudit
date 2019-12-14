import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наследить: PerfectVerb = {
  name: Word('наследить', 6),
  singular1stPerson: Word('наслежу', 6),
  singular2ndPerson: Word('наследишь', 6),
  singular3rdPerson: Word('наследит', 6),
  plural1stPerson: Word('наследим', 6),
  plural2ndPerson: Word('наследите', 6),
  plural3rdPerson: Word('наследят', 6),
  masculinePast: Word('наследил', 6),
  femininePast: Word('наследила', 6),
  neuterPast: Word('наследило', 6),
  pluralPast: Word('наследили', 6),
  imperativeInformal: Word('наследи', 6),
  imperativeFormal: Word('наследите', 6),
  imperfect: [],
};

perfectVerbs.set(наследить.name.text, наследить);

export { наследить };