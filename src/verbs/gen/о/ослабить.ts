import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ослабить: PerfectVerb = {
  name: Word('ослабить', 3),
  singular1stPerson: Word('ослаблю', 3),
  singular2ndPerson: Word('ослабишь', 3),
  singular3rdPerson: Word('ослабит', 3),
  plural1stPerson: Word('ослабим', 3),
  plural2ndPerson: Word('ослабите', 3),
  plural3rdPerson: Word('ослабят', 3),
  masculinePast: Word('ослабил', 3),
  femininePast: Word('ослабила', 3),
  neuterPast: Word('ослабило', 3),
  pluralPast: Word('ослабили', 3),
  imperativeInformal: Word('ослабь', 3),
  imperativeFormal: Word('ослабьте', 3),
  imperfect: ['ослаблять'],
};

perfectVerbs.set(ослабить.name.text, ослабить);

export { ослабить };