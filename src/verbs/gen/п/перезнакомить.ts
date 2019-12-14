import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перезнакомить: PerfectVerb = {
  name: Word('перезнакомить', 8),
  singular1stPerson: Word('перезнакомлю', 8),
  singular2ndPerson: Word('перезнакомишь', 8),
  singular3rdPerson: Word('перезнакомит', 8),
  plural1stPerson: Word('перезнакомим', 8),
  plural2ndPerson: Word('перезнакомите', 8),
  plural3rdPerson: Word('перезнакомят', 8),
  masculinePast: Word('перезнакомил', 8),
  femininePast: Word('перезнакомила', 8),
  neuterPast: Word('перезнакомило', 8),
  pluralPast: Word('перезнакомили', 8),
  imperativeInformal: Word('перезнакомь', 8),
  imperativeFormal: Word('перезнакомьте', 8),
  imperfect: [],
};

perfectVerbs.set(перезнакомить.name.text, перезнакомить);

export { перезнакомить };