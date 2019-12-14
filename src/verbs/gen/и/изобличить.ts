import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изобличить: PerfectVerb = {
  name: Word('изобличить', 7),
  singular1stPerson: Word('изобличу', 7),
  singular2ndPerson: Word('изобличишь', 7),
  singular3rdPerson: Word('изобличит', 7),
  plural1stPerson: Word('изобличим', 7),
  plural2ndPerson: Word('изобличите', 7),
  plural3rdPerson: Word('изобличат', 7),
  masculinePast: Word('изобличил', 7),
  femininePast: Word('изобличила', 7),
  neuterPast: Word('изобличило', 7),
  pluralPast: Word('изобличили', 7),
  imperativeInformal: Word('изобличи', 7),
  imperativeFormal: Word('изобличите', 7),
  imperfect: [],
};

perfectVerbs.set(изобличить.name.text, изобличить);

export { изобличить };