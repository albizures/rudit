import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассекретить: PerfectVerb = {
  name: Word('рассекретить', 7),
  singular1stPerson: Word('рассекречу', 7),
  singular2ndPerson: Word('рассекретишь', 7),
  singular3rdPerson: Word('рассекретит', 7),
  plural1stPerson: Word('рассекретим', 7),
  plural2ndPerson: Word('рассекретите', 7),
  plural3rdPerson: Word('рассекретят', 7),
  masculinePast: Word('рассекретил', 7),
  femininePast: Word('рассекретила', 7),
  neuterPast: Word('рассекретило', 7),
  pluralPast: Word('рассекретили', 7),
  imperativeInformal: Word('рассекреть', 7),
  imperativeFormal: Word('рассекретьте', 7),
  imperfect: [],
};

perfectVerbs.set(рассекретить.name.text, рассекретить);

export { рассекретить };