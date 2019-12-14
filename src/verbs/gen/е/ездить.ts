import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ездить: PerfectVerb = {
  name: Word('ездить', 0),
  singular1stPerson: Word('езжу', 0),
  singular2ndPerson: Word('ездишь', 0),
  singular3rdPerson: Word('ездит', 0),
  plural1stPerson: Word('ездим', 0),
  plural2ndPerson: Word('ездите', 0),
  plural3rdPerson: Word('ездят', 0),
  masculinePast: Word('ездил', 0),
  femininePast: Word('ездила', 0),
  neuterPast: Word('ездило', 0),
  pluralPast: Word('ездили', 0),
  imperativeInformal: Word('езди', 0),
  imperativeFormal: Word('ездите', 0),
  imperfect: ['поездить'],
};

perfectVerbs.set(ездить.name.text, ездить);

export { ездить };