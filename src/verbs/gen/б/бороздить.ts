import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бороздить: PerfectVerb = {
  name: Word('бороздить', 6),
  singular1stPerson: Word('борозжу', 6),
  singular2ndPerson: Word('бороздишь', 6),
  singular3rdPerson: Word('бороздит', 6),
  plural1stPerson: Word('бороздим', 6),
  plural2ndPerson: Word('бороздите', 6),
  plural3rdPerson: Word('бороздят', 6),
  masculinePast: Word('бороздил', 6),
  femininePast: Word('бороздила', 6),
  neuterPast: Word('бороздило', 6),
  pluralPast: Word('бороздили', 6),
  imperativeInformal: Word('борозди', 6),
  imperativeFormal: Word('бороздите', 6),
  imperfect: [],
};

perfectVerbs.set(бороздить.name.text, бороздить);

export { бороздить };