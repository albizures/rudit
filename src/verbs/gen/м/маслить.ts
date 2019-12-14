import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const маслить: PerfectVerb = {
  name: Word('маслить', 1),
  singular1stPerson: Word('маслю', 1),
  singular2ndPerson: Word('маслишь', 1),
  singular3rdPerson: Word('маслит', 1),
  plural1stPerson: Word('маслим', 1),
  plural2ndPerson: Word('маслите', 1),
  plural3rdPerson: Word('маслят', 1),
  masculinePast: Word('маслил', 1),
  femininePast: Word('маслила', 1),
  neuterPast: Word('маслило', 1),
  pluralPast: Word('маслили', 1),
  imperativeInformal: Word('масли', 1),
  imperativeFormal: Word('маслите', 1),
  imperfect: [],
};

perfectVerbs.set(маслить.name.text, маслить);

export { маслить };