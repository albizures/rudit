import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пристроить: PerfectVerb = {
  name: Word('пристроить', 6),
  singular1stPerson: Word('пристрою', 6),
  singular2ndPerson: Word('пристроишь', 6),
  singular3rdPerson: Word('пристроит', 6),
  plural1stPerson: Word('пристроим', 6),
  plural2ndPerson: Word('пристроите', 6),
  plural3rdPerson: Word('пристроят', 6),
  masculinePast: Word('пристроил', 6),
  femininePast: Word('пристроила', 6),
  neuterPast: Word('пристроило', 6),
  pluralPast: Word('пристроили', 6),
  imperativeInformal: Word('пристрой', 6),
  imperativeFormal: Word('пристройте', 6),
  imperfect: ['пристраивать'],
};

perfectVerbs.set(пристроить.name.text, пристроить);

export { пристроить };