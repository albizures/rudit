import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накосить: PerfectVerb = {
  name: Word('накосить', 5),
  singular1stPerson: Word('накошу', 5),
  singular2ndPerson: Word('накосишь', 3),
  singular3rdPerson: Word('накосит', 3),
  plural1stPerson: Word('накосим', 3),
  plural2ndPerson: Word('накосите', 3),
  plural3rdPerson: Word('накосят', 3),
  masculinePast: Word('накосил', 5),
  femininePast: Word('накосила', 5),
  neuterPast: Word('накосило', 5),
  pluralPast: Word('накосили', 5),
  imperativeInformal: Word('накоси', 5),
  imperativeFormal: Word('накосите', 5),
  imperfect: [],
};

perfectVerbs.set(накосить.name.text, накосить);

export { накосить };