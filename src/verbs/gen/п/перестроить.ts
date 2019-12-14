import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перестроить: PerfectVerb = {
  name: Word('перестроить', 7),
  singular1stPerson: Word('перестрою', 7),
  singular2ndPerson: Word('перестроишь', 7),
  singular3rdPerson: Word('перестроит', 7),
  plural1stPerson: Word('перестроим', 7),
  plural2ndPerson: Word('перестроите', 7),
  plural3rdPerson: Word('перестроят', 7),
  masculinePast: Word('перестроил', 7),
  femininePast: Word('перестроила', 7),
  neuterPast: Word('перестроило', 7),
  pluralPast: Word('перестроили', 7),
  imperativeInformal: Word('перестрой', 7),
  imperativeFormal: Word('перестройте', 7),
  imperfect: ['перестраивать'],
};

perfectVerbs.set(перестроить.name.text, перестроить);

export { перестроить };