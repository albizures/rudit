import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ополоуметь: PerfectVerb = {
  name: Word('ополоуметь', 5),
  singular1stPerson: Word('ополоумею', 5),
  singular2ndPerson: Word('ополоумеешь', 5),
  singular3rdPerson: Word('ополоумеет', 5),
  plural1stPerson: Word('ополоумеем', 5),
  plural2ndPerson: Word('ополоумеете', 5),
  plural3rdPerson: Word('ополоумеют', 5),
  masculinePast: Word('ополоумел', 5),
  femininePast: Word('ополоумела', 5),
  neuterPast: Word('ополоумело', 5),
  pluralPast: Word('ополоумели', 5),
  imperativeInformal: Word('ополоумей', 5),
  imperativeFormal: Word('ополоумейте', 5),
  imperfect: [],
};

perfectVerbs.set(ополоуметь.name.text, ополоуметь);

export { ополоуметь };