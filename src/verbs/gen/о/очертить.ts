import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const очертить: PerfectVerb = {
  name: Word('очертить', 5),
  singular1stPerson: Word('очерчу', 5),
  singular2ndPerson: Word('очертишь', 2),
  singular3rdPerson: Word('очертит', 2),
  plural1stPerson: Word('очертим', 2),
  plural2ndPerson: Word('очертите', 2),
  plural3rdPerson: Word('очертят', 2),
  masculinePast: Word('очертил', 5),
  femininePast: Word('очертила', 5),
  neuterPast: Word('очертило', 5),
  pluralPast: Word('очертили', 5),
  imperativeInformal: Word('очерти', 5),
  imperativeFormal: Word('очертите', 5),
  imperfect: [],
};

perfectVerbs.set(очертить.name.text, очертить);

export { очертить };