import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искривить: PerfectVerb = {
  name: Word('искривить', 6),
  singular1stPerson: Word('искривлю', 7),
  singular2ndPerson: Word('искривишь', 6),
  singular3rdPerson: Word('искривит', 6),
  plural1stPerson: Word('искривим', 6),
  plural2ndPerson: Word('искривите', 6),
  plural3rdPerson: Word('искривят', 6),
  masculinePast: Word('искривил', 6),
  femininePast: Word('искривила', 6),
  neuterPast: Word('искривило', 6),
  pluralPast: Word('искривили', 6),
  imperativeInformal: Word('искриви', 6),
  imperativeFormal: Word('искривите', 6),
  imperfect: [],
};

perfectVerbs.set(искривить.name.text, искривить);

export { искривить };