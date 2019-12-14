import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уличить: PerfectVerb = {
  name: Word('уличить', 4),
  singular1stPerson: Word('уличу', 4),
  singular2ndPerson: Word('уличишь', 4),
  singular3rdPerson: Word('уличит', 4),
  plural1stPerson: Word('уличим', 4),
  plural2ndPerson: Word('уличите', 4),
  plural3rdPerson: Word('уличат', 4),
  masculinePast: Word('уличил', 4),
  femininePast: Word('уличила', 4),
  neuterPast: Word('уличило', 4),
  pluralPast: Word('уличили', 4),
  imperativeInformal: Word('уличи', 4),
  imperativeFormal: Word('уличите', 4),
  imperfect: [],
};

perfectVerbs.set(уличить.name.text, уличить);

export { уличить };