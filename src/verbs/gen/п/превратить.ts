import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const превратить: PerfectVerb = {
  name: Word('превратить', 7),
  singular1stPerson: Word('превращу', 7),
  singular2ndPerson: Word('превратишь', 7),
  singular3rdPerson: Word('превратит', 7),
  plural1stPerson: Word('превратим', 7),
  plural2ndPerson: Word('превратите', 7),
  plural3rdPerson: Word('превратят', 7),
  masculinePast: Word('превратил', 7),
  femininePast: Word('превратила', 7),
  neuterPast: Word('превратило', 7),
  pluralPast: Word('превратили', 7),
  imperativeInformal: Word('преврати', 7),
  imperativeFormal: Word('превратите', 7),
  imperfect: [],
};

perfectVerbs.set(превратить.name.text, превратить);

export { превратить };