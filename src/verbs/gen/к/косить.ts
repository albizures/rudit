import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const косить: PerfectVerb = {
  name: Word('косить', 3),
  singular1stPerson: Word('кошу', 3),
  singular2ndPerson: Word('косишь', 1),
  singular3rdPerson: Word('косит', 1),
  plural1stPerson: Word('косим', 1),
  plural2ndPerson: Word('косите', 1),
  plural3rdPerson: Word('косят', 1),
  masculinePast: Word('косил', 3),
  femininePast: Word('косила', 3),
  neuterPast: Word('косило', 3),
  pluralPast: Word('косили', 3),
  imperativeInformal: Word('коси', 3),
  imperativeFormal: Word('косите', 3),
  imperfect: ['скосить'],
};

perfectVerbs.set(косить.name.text, косить);

export { косить };