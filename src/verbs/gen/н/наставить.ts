import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наставить: PerfectVerb = {
  name: Word('наставить', 4),
  singular1stPerson: Word('наставлю', 4),
  singular2ndPerson: Word('наставишь', 4),
  singular3rdPerson: Word('наставит', 4),
  plural1stPerson: Word('наставим', 4),
  plural2ndPerson: Word('наставите', 4),
  plural3rdPerson: Word('наставят', 4),
  masculinePast: Word('наставил', 4),
  femininePast: Word('наставила', 4),
  neuterPast: Word('наставило', 4),
  pluralPast: Word('наставили', 4),
  imperativeInformal: Word('наставь', 4),
  imperativeFormal: Word('наставьте', 4),
  imperfect: ['наставлять'],
};

perfectVerbs.set(наставить.name.text, наставить);

export { наставить };