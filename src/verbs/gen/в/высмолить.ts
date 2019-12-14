import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высмолить: PerfectVerb = {
  name: Word('высмолить', 1),
  singular1stPerson: Word('высмолю', 1),
  singular2ndPerson: Word('высмолишь', 1),
  singular3rdPerson: Word('высмолит', 1),
  plural1stPerson: Word('высмолим', 1),
  plural2ndPerson: Word('высмолите', 1),
  plural3rdPerson: Word('высмолят', 1),
  masculinePast: Word('высмолил', 1),
  femininePast: Word('высмолила', 1),
  neuterPast: Word('высмолило', 1),
  pluralPast: Word('высмолили', 1),
  imperativeInformal: Word('высмоли', 1),
  imperativeFormal: Word('высмолите', 1),
  imperfect: [],
};

perfectVerbs.set(высмолить.name.text, высмолить);

export { высмолить };