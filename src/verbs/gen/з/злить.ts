import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const злить: PerfectVerb = {
  name: Word('злить', 2),
  singular1stPerson: Word('злю', 2),
  singular2ndPerson: Word('злишь', 2),
  singular3rdPerson: Word('злит', 2),
  plural1stPerson: Word('злим', 2),
  plural2ndPerson: Word('злите', 2),
  plural3rdPerson: Word('злят', 2),
  masculinePast: Word('злил', 2),
  femininePast: Word('злила', 2),
  neuterPast: Word('злило', 2),
  pluralPast: Word('злили', 2),
  imperativeInformal: Word('зли', 2),
  imperativeFormal: Word('злите', 2),
  imperfect: ['разозлить'],
};

perfectVerbs.set(злить.name.text, злить);

export { злить };