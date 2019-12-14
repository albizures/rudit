import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удивить: PerfectVerb = {
  name: Word('удивить', 4),
  singular1stPerson: Word('удивлю', 5),
  singular2ndPerson: Word('удивишь', 4),
  singular3rdPerson: Word('удивит', 4),
  plural1stPerson: Word('удивим', 4),
  plural2ndPerson: Word('удивите', 4),
  plural3rdPerson: Word('удивят', 4),
  masculinePast: Word('удивил', 4),
  femininePast: Word('удивила', 4),
  neuterPast: Word('удивило', 4),
  pluralPast: Word('удивили', 4),
  imperativeInformal: Word('удиви', 4),
  imperativeFormal: Word('удивите', 4),
  imperfect: ['удивлять'],
};

perfectVerbs.set(удивить.name.text, удивить);

export { удивить };